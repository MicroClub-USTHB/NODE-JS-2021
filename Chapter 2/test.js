var list = [58, "", "abcd", true, null, false, 0];
list.filter((elm) => {
  return !!elm;
});
