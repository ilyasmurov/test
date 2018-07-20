<script>

  const Bound = (brackets) => {

    let data = {};

    for (let i = 0; i < brackets.length; i++) {
      data[brackets.charAt(i)] = {
        id : i >>> 1,
        open : !(i % 2)
      }
    }

    return (string) => {

      let stack = [];
      let bracket;

      for (let i = 0; i < string.length; i++) {

        bracket = string.charAt(i);

        if (data[bracket]) {
          if (data[bracket].open) {
            stack.push(data[bracket].id);
          } else if (stack.length === 0 || stack.pop() !== data[bracket].id) {
            return false;
          }
        }

      }

      return stack.length == 0;
    }
  }

  const test = Bound('()[]{}');
  const string = '{((a))}{b}';
  console.log(`Test "${string}": `, test(string))

</script>
