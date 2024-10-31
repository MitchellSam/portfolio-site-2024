import React from 'react';

const Contact = () => (
    <section id="contact" className="p-4">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <div className="card w-full bg-base-100 shadow-md">
            <div className="card-body">
                <form>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea
                            placeholder="Type your message"
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>
                    <button className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>
);

export default Contact;
