// QM Refinery
const qm = extend(GenericSmelter, "mini-refinery", {
    configurations: ObjectMap.of(
        Item,
        extend(Cons2, {
            get: (b, s) => b.setSoutItem(s)
        }),

        java.lang.Integer,
        extend(Cons2, {
            get: (b, s) => b.setSoutQuant(s)
        })
    )
});
qm.buildType = () => extend(GenericSmelter.SmelterBuild, qm, {
    buildConfiguration(table){
        let button = (item, qtty) => {
           table.button(new TextureRegionDrawable(Items[item].icon(Cicon.medium)), Styles.clearTransi, () => {
               this.sout.item = Items[item];
               this.sout.amount = qtty;
               this.configure(this.sout.item);
               this.configure(this.sout.amount);
            });
        };
        button('tin', 3);
        button('alumin', 3);
        button('silver', 3);
    },
    write(write) {
        this.super$write(write);
        
        // soutid is the item's id.
        write.str(this.sout.item.name);
        // soutamount is the item's amount.
        write.i(this.sout.amount);
    }, 
    read(read, revision) {
        this.super$read(read, revision);
    
        this.sout.item = Items[Strings.kebabToCamel(read.str())];
        this.sout.amount = read.i();
    },
    getItem() {
        return new ItemStack(this.sout.item, this.sout.amount);
    },
    setSoutItem(s){
        this.sout.item = s;
    },
    setSoutQuant(s){
        this.sout.amount = s;
    },

    sout: {
        item: Items.surgeAlloy,
        amount:2
    },
    updateTile(){
        
        if(this.consValid()){
    
            this.progress += this.getProgressIncrease(this.block.craftTime);
            this.totalProgress += this.delta();
            this.warmup = Mathf.lerpDelta(this.warmup, 1, 0.02);
    
            if(Mathf.chanceDelta(this.block.updateEffectChance)){
                this.block.updateEffect.at(this.getX() + Mathf.range(this.size * 4), this.getY() + Mathf.range(this.size * 4));
            }
        }else{
            this.warmup = Mathf.lerp(this.warmup, 0, 0.02);
        }
    
        if(this.progress >= 1){
            this.consume();
    
            if(this.getItem() != null){
                for(let i = 0; i < this.getItem().amount; i++){
                    this.offload(this.getItem().item);
                }
            }
    
            this.block.craftEffect.at(this.x, this.y);
            this.progress %= 1;
        }
    
        if(this.getItem() != null && this.timer.get(this.block.timerDump, this.block.dumpTime)){
            this.dump(this.getItem().item);
        }
    }
});