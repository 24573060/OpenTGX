
import { GameUILayer } from "../../scripts/GameUILayer";
import { UI_AboutMe, UIModule } from "../../scripts/UIDef";
import { Layout_AboutMe } from "./Layout_AboutMe";

export class UI_AboutMe_Impl extends UI_AboutMe{
    constructor(){
        super('UI_AboutMe', GameUILayer.POPUP0, Layout_AboutMe);
    }

    public getRes(): [] {
        return [];
    }

    protected onCreated(): void {
        let layout = this.layout as Layout_AboutMe;
        this.onButtonEvent(layout.btnClose,()=>{
            this.hide();
        });
    }
}

UIModule.attachImplClass(UI_AboutMe,UI_AboutMe_Impl);