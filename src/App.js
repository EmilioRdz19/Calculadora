function App() {

    const createDigits = () => {
      const digits = [];

      for (let i = 1; i < 10; i++) {
        digits.push(
          <botton key={i}>{i}</botton>
        )
      }

      return digits;
    }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span> 0
        </div>

        <div className="operators">
          <buttom>/</buttom>
          <buttom>*</buttom>
          <buttom>+</buttom>
          <buttom>-</buttom>

          <buttom>DEL</buttom>
          </div>

          <div className="digits">
          { createDigits() }
          <buttom>0</buttom>
          <buttom>.</buttom>
          <buttom>=</buttom>
          </div>

      </div>
    </div>
  );
}

export default App;
