import React from 'react';
import axios from 'axios';
import CompanyHeader from '../CompanyHeader';
import CompanyBio from './CompanyBio';
import { Form, TextArea } from 'semantic-ui-react';

class CompanyProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      basicDetail: [],
      showTextFrom: false,
      tempCompany_description: ''
    };
  }

  componentDidMount() {
    const id = 2;
    axios.get(`http://18.206.154.118:8080/api/employer/${id}`).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        this.setState({ basicDetail: res.data.result });
      }
    });
  }

  onAddDescription = () => {
    this.setState({ showTextFrom: !this.state.showTextFrom });
  };

  onCancelTextArea = () => {
    this.setState({ showTextFrom: !this.state.showTextFrom });
  };

  onSaveTextArea = () => {
    const data = [...this.state.basicDetail];
    data[0].company_description = this.state.tempCompany_description;
    console.log('new', data);
    axios
      .post('http://18.206.154.118:8080/api/student/basic/17', data[0], {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ basicDetail: data });
        } else {
          console.log(res);
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ showTextFrom: !this.state.showTextFrom });
  };

  onChangeCareerObjective = e => {
    this.setState({ tempCareerObjective: e.target.value });
  };

  renderTextForm = () => {
    return (
      <div>
        <Form>
          <div style={{ marginBottom: '10px' }}>
            <p>
              <text style={{ color: 'blue' }}>
                What are you passionate about? What are you looking for on
                Handshake? What are your experiences or skills?
              </text>
            </p>
            <TextArea
              rows={2}
              placeholder=''
              value={this.state.tempCareerObjective}
              onChange={this.onChangeCareerObjective}
            />
          </div>
          <div>
            <button class='ui button' onClick={this.onCancelTextArea}>
              Cancel
            </button>
            <button class='ui positive button' onClick={this.onSaveTextArea}>
              Save
            </button>
          </div>
        </Form>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div>
          <CompanyHeader />
        </div>
        <div
          style={{
            float: 'left',
            width: '25%',
            marginTop: '20px',
            marginLeft: '10%'
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            {this.state.basicDetail.map(bio => {
              return <CompanyBio bio={bio} />;
            })}
          </div>
        </div>
        <div
          style={{
            float: 'left',
            width: '52.5%',
            marginLeft: '20px',
            marginTop: '20px'
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <div className='ui raised segment'>
              <b>Company Description</b>
              <i
                className='pencil alternate icon'
                style={{ float: 'right' }}
                onClick={this.onAddDescription}
              ></i>
              <div style={{ marginTop: '10px' }}>
                {!this.state.showTextFrom &&
                  this.state.basicDetail.map(item => {
                    return (
                      <p style={{ fontSize: '20px' }}>
                        {item.company_description}
                      </p>
                    );
                  })}
                {this.state.showTextFrom && this.renderTextForm()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyProfile;
