import React, { Component } from 'react';

import JobCard from './JobCard/JobCard';

class JobsList extends Component {

  state = {
    jobs: [
      { id: 1, name: 'test', description: 'Bdasdsadsadsad', salary: 1200, area: 'test' },
      { id: 2, name: 'dev', description: 'dasdasdsad', salary: 1200, area: 'dev' },
      { id: 3, name: 'dev', description: 'dasdasdsad', salary: 1200, area: 'dev' },
      { id: 4, name: 'dev', description: 'dasdasdsad', salary: 1200, area: 'dev' },
      { id: 5, name: 'designer', description: 'dasdadsadsad', salary: 1200, area: 'designer' }
    ],
    hasError: false
  }

  jobRemoveHandler = (paramId, paramName) => {
    if (window.confirm(`Deseja realmente remover a vaga  ${paramName} ?`)) {
      const index = this.state.jobs.findIndex(job => job.id === paramId);

      let newList = this.state.jobs;
      newList.splice(index, 1);
      this.setState( { jobs: newList });

      window.alert('Removido com sucesso !');
    }

  }

  
  render() {
    console.log("rntrou sadljkasodhasjohaksdh");
    const renderJobs = this.state.jobs.map( job => {
      return <JobCard
        key={job.id}
        name={job.name}
        description={job.description}
        salary={job.salary}
        area={job.area} 
        removeHandler= { () => this.jobRemoveHandler(job.id, job.name) } />
    });


    return (
      <div className="row">
        { renderJobs }
     </div>
    )
  }
}

// const jobsList = () => (
//   <div className="row">
//     <JobCard/>
//     <JobCard/>
//     <JobCard/>

//   </div>
// );

export default JobsList;
