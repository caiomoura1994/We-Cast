const registerNavigation = navigation => ({
  type: 'REGISTER_NAVIGATION',
  navigation
});

const searchTheHot = textTheHot => ({
  type: 'SEARCH_THE_HOT',
  textTheHot
});

export { registerNavigation, searchTheHot };