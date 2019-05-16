export default function updateSelectedHat(
  state = Math.floor(Math.random() * 4),
  action
) {
  switch (action.type) {
    case 'UPDATE_CHOICE_WITH_MY_INDEX':
      return Math.floor(Math.random() * 4)
    default:
      return state
  }
}
