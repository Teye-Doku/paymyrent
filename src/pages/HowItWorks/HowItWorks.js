import './HowItWorks.css';
import search from '../../images/search.jpg';
import verify from '../../images/verify.jpg';
import approval from '../../images/approval.jpg';
import handshake from '../../images/handshakes.jpg';
const  HowItWorks = () =>{
    return (
      <>
         <div className='howitworks__banner'>

            <h3>How it works</h3>
         </div>
         <div className='howitworkss'>
            <div className="home__stepss">
                    <div className='home__steps_headingg'>
                    <h5> 4 Easy steps to pay your rent monthly.</h5>
                    </div>
                      <div className='home__steps_itemm'>
                          <img src={search} alt='' />
                          <div className='home__steps__item__contentt'>
                             <h3>Search</h3>
                             <p>Find your own dream house or browse listings on Paymyrent page</p>
                          </div>
                      </div>
                      <div className='home__steps_itemm'>
                          <img src={verify} alt='' />
                          <div className='home__steps__item__contentt'>
                             <h3>Verification</h3>
                             <p>Submit your documents for verification and continue from there.</p>
                          </div>
                      </div>
                      <div className='home__steps_itemm'>
                          <img src={approval} alt='' />
                          <div className='home__steps__item__contentt'>
                             <h3>Get Approval</h3>
                             <p>Paymyrent takes 1-4 days to verify documents and provide funding approval</p>
                          </div>
                      </div>
                      <div className='home__steps_itemm'>
                          <img src={handshake} alt='' />
                          <div className='home__steps__item__contentt'>
                             <h3>Move In</h3>
                             <p>Sign your contract with Paymyrent and move in. Pay your rent MONTHLY!</p>
                          </div>
                      </div>
                  </div>
        </div>
      </>
    )
};
export default HowItWorks;
