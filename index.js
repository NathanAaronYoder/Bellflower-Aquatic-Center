class About extends React.Component {
  render() {
    return <React.Fragment><h1 id='BACHeader'>Bellflower Aquatic Center</h1><p id='aboutInfo'>The Bellflower Aquatic Center is a facility within Thomson Park located at 14001 Bellflower Blvd, Bellflower, CA 90706. At our facility, we have an indoor pool, outdoor pool, and a weight room.</p></React.Fragment>;
  }
}

class Schedule extends React.Component {
  render() {
    return <React.Fragment><h2>Schedule</h2><h3>Lap Swimming</h3><ul><li>Monday-Friday: 5:00-7:00 a.m.</li><li>Monday-Friday: 11:00 a.m.-1:00 p.m.</li><li>Monday-Thursday: 7:00-8:00 p.m.</li><li>Saturday: 7:00-9:00 a.m.</li></ul><h3>Weight Room (Adults Only)</h3><ul><li>Monday-Friday: 5:00-7:00 a.m.</li><li>Monday-Friday: 11:00 a.m.-1:00 p.m.</li><li>Monday-Thursday: 5:00-8:00 p.m.</li><li>Friday: 4:00 p.m.-7:00 p.m.</li><li>Saturday: 7:00-9:00 a.m.</li><li>1st and 3rd Saturday: 12:30 p.m.-2:30 p.m.</li></ul><h3>Teen Weight Room (Teens Only)</h3><ul><li>Monday-Thursday: 4:00-5:00 p.m.</li><li>Saturday: 12:30 a.m.-2:30 p.m.</li></ul><h3>Recreation Swim</h3><ul><li>1st and 3rd Saturday: 12:30-2:30 p.m.</li></ul><h3>Recreation Swim (Summer)</h3><ul><li>Monday-Friday: 12:30-2:00 p.m., 2:30-4:00 p.m.</	li	><li>Saturday: 12:30 a.m.-2:30 p.m.</li></ul><h3>Lap Swimming  (Summer)</h3><ul><li>Monday-Friday: 5:00-7:00 a.m.</li><li>Monday-Friday: 11:00 a.m.-12:30 p.m.</li><li>Monday-Thursday: 4:30-8:00 p.m.</li></ul><h3>Weight Room (Summer)</h3><ul><li>Monday-Friday: 5:00-7:00 a.m.</li><li>Monday-Friday: 11:00 a.m.-1:00 p.m.</li><li>Monday-Thursday: 4:00-8:00 p.m.</li><li>Friday: 4:00 p.m.-7:00 p.m.</li><li>Saturday: 7:00-9:00 a.m., 12:30-2:30 p.m.</li></ul></React.Fragment>;
  }
}

class Pricing extends React.Component {
  render() {
    return <React.Fragment><h2>Pricing</h2><p>To receive a resident discount, residents must have a 	resident card. Resident Cards can be bought for $1 at 	the front desk. Proof of Bellflower residency must be 	shown.</p><h3>General Admission</h3><table><tbody><tr><th></th><th>Resident</th><th>Non-Resident</th></tr><tr><th>Child/Senior</th><td>$1</td><td>$2</td></tr><tr><th>Adult (18-54)</th><td>$2</td><td>$3</td></tr></tbody></table><h3>Annual Pass</h3><table><tbody><tr><th></th><th>Resident</th><th>Non-Resident</th></tr><tr><th>Child/Senior</th><td>$150</td><td>$200</td></tr><tr><th>Adult (18-54)</th><td>$200</td><td>$300</td></tr></tbody></table><p>Punch Cards with 10 uses can be bought for general 	admission price.</p><strong>Private Pool Parties (2 hour minimum)</strong><ul><li>Resident: $100/hr</li><li>Non-Resident: $150/hr</li></ul></React.Fragment>;
  }
}

class Contact extends React.Component {
	render() {
		return <React.Fragment><h2>Contact Us</h2><p>Phone: (562) 866-2015</p></React.Fragment>;
	}
}

ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Schedule />, document.getElementById('schedule'));
ReactDOM.render(<Pricing />, document.getElementById('pricing'));
ReactDOM.render(<Contact />, document.getElementById('contact'));