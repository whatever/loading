import {Interaction} from './interaction.js';

export class LoadingThing {

  constructor() {
    this.interaction = new Interaction();
  }


}

/*
let i = new Interaction();

i.add("start", ["dropping", "fail"]);
i.add("picking", ["finished", "fail"]);
i.add("dropping", ["paying", "fail"]);
i.add("paying", ["picking", "fail"]);

i.set("start");
i.set("dropping");
i.set("paying");
i.set("picking");
i.set("finished");
*/
