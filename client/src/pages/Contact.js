import React from 'react';

function Contact() {
    return ( <div class="container">
    <div className="flex-row justify-center col-5 col-lg-3">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Contact</h4>
          <div className="card-body">
            <form target="_blank" 
          action="https://formsubmit.co/soleplane.official@gmail.com" 
          method="POST">

      <div class="form-group">
        <div class="form-row">
          <div class="col">
            <input type="text" 
                   name="name" 
                   class="form-control" 
                   placeholder="Full Name" 
                   required />
          </div>
          <div class="col">
            <input type="email" 
                   name="email" 
                   class="form-control" 
                   placeholder="Email Address" 
                   required />
          </div>
        </div>
      </div>
      <div class="form-group">
        <textarea placeholder="Your Message" 
                  class="form-control" 
                  name="message" 
                  rows="10" 
                  required></textarea>
      </div>
      <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
            </form>
            </div>
        </div>
    </div>
  </div>
)};

export default Contact; 