function step(name, next) {
  setTimeout(() => {
    console.log(name);
    next && next();
  }, 1000);
}

step("design", () => {
  step("build", () => {
    step("test", () => {
      step("deploy", () => {
        step("celebrate");
      });
    });
  });
});
