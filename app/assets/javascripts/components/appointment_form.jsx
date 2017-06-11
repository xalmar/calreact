class AppointmentForm extends React.Component {
    handleChange(e) {
        const name = e.target.name;
        obj = {};
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit();
    }

    setAptTime(e) {
        const name = 'apt_time';
        const obj = {}
        if (obj[name] = e.toDate()) {
            this.props.onUserInput(obj);
        }
    }

    render() {
        const inputProps = {
            name: 'apt_time'
        };

        return (
            <div>
                <h2>Make a new appointment</h2>
                <Label label='Enter a title, date and time' />
                <form onSubmit={(event) => this.handleSubmit(event)} >
                    <input name='title' placeholder ='Appointment Title' 
                        value={this.props.input_title} 
                        onChange={(event) => this.handleChange(event)} />

                    <Datetime input={false} open={true} inputProps={inputProps}
                        value={this.props.apt_time} 
                        onChange={(event) => this.setAptTime(event)}/>
                    <input type='submit' value='Make Appointment' className='submit-button' />
                </form>     
            </div>
        );
    }
};
