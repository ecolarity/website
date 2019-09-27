import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://ecolarity.us20.list-manage.com/subscribe/post?u=fff2337e1594f4d61edae8727&amp;id=fd53806bdd";

const Signup = () => {
    return (
        <div className="center mw5 mw6-ns hidden bt mv4 pt2 bt b--white">
            <p className='f5-ns lh-copy measure mv0 white pb2'>
                {"We are developing an educational solution to help future generations become environmentally aware. Sign up to our newsletter below to hear news of our launch."}
            </p>
            <MailchimpSubscribe url={url} />
            {/*<div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-dark-green pointer'>Sign up</button>
                </div>
            </div>*/}
        </div>
    )
}

export default Signup;



