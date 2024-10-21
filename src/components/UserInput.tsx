const UserInput = ({ onChangeInput, userInput }) => {

  return (
    <section className="user-input-section">
      <div className="input-group">
        <div className="form-field">
          <label>Initial investment</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(e) => onChangeInput('initialInvestment', e.target.value)} />
        </div>
        <div className="form-field">
          <label>Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(e) => onChangeInput('annualInvestment', e.target.value)} />
        </div>
      </div>
      <div className="input-group">
        <div className="form-field">
          <label>Expected return</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(e) => onChangeInput('expectedReturn', e.target.value)} />
        </div>
        <div className="form-field">
          <label>Duration</label>
          <input type="number" required value={userInput.duration} onChange={(e) => onChangeInput('duration', e.target.value)} />
        </div>
      </div>
    </section>
  )
}

export default UserInput