import { AbilityBuilder, Ability } from "@casl/ability";

const user = JSON.parse(localStorage.getItem("user"));
function subjectName(item) {
  if (!item || typeof item === "string" || !user) {
    return item;
  } else if (item.createdBy === user.id || user.isAdmin === 1) {
    return "Article";
  }
}

// define abilities
const { can, cannot, rules } = new AbilityBuilder();

can('read', ['Article']);
// cannot('create', 'Article');
// can('create', 'Article');
can('manage', 'all');

// check abilities
const ability = new Ability(rules);

export default ability;

