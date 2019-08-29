import Component from "@ember/component";
import { computed } from "@ember/object";
export default Component.extend({
  alpha: true,
  beta: true,
  foo: computed("property", function() {
    /*
     should through lint error: 
     Don't introduce side-effects in computed properties eslint(ember/no-side-effects)
     */
    this.set("beta", false);
  })
});
