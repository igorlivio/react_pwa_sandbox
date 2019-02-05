import React from 'react'

const collapse = (props) => (
    <div>
        <p>
            <a className={ 'btn' }/*"mt-4 btn btn-primary"*/ data-toggle="collapse" href={'#' + props.collapseId } role="button" >
            { props.buttonText }

            </a>
            <div className="collapse mb-3" id={props.collapseId}>
                <div className="card card-body mb-3" >
                    { props.children }
                </div>
            </div>
        </p>
    </div>
    
)

export default collapse;