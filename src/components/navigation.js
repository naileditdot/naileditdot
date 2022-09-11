import React from "react";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>we offer:</div>
            <ul className='services'>
              <li>
                <p>
                  nails
                </p>
              </li>
              <li>
                <p>
                  manicure & pedicure
                </p>
              </li>
              <li>
                <p>
                  facials
                </p>
              </li>
              <li>
                <p>
                  eyelashes
                </p>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Reach out</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <a href="mailto:naileditdot@gmail.com" alt="email">
                    naileditdot@gmail.com
                  </a>
                </li>
              </ul>
              <ul className='nav-info'>
              <li className='nav-info-label'>Check us out</li>
              <a style={{textDecoration: 'none', color:'#FFFAFC'}} href="https://www.google.com/search?q=nailedit%20jaipur&ei=DAcdY6n-Ov-gseMP-8mP2Ag&ved=2ahUKEwiptNbmmov6AhV_UGwGHfvkA4sQvS56BAgMEAE&uact=5&oq=nailedit+jaipur&gs_lcp=Cgdnd3Mtd2l6EAMyCgguEMcBEK8BEAo6CggAEEcQ1gQQsAM6FAgAEOoCELQCEIoDELcDENQDEOUCOhEIABDqAhC0AhCKAxC3AxDlAjoECC4QQzoFCAAQkQI6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoFCC4QgAQ6CAgAELEDEIMBOgYIABAKEEM6CgguEMcBEK8BEEM6CgguEMcBENEDEEM6BAgAEEM6CAguELEDEIMBOgsILhDHARCvARCRAjoHCAAQsQMQQzoOCC4QgAQQsQMQxwEQ0QM6CAguELEDENQCOgUIABCABDoTCC4QsQMQgwEQsQMQxwEQ0QMQCjoICC4QgAQQ1AI6EAguELEDEIMBEMcBEK8BEEM6BwguELEDEEM6CAgAEIAEELEDOg0IABCxAxCDARDJAxBDOgsIABCxAxCDARCRAjoLCC4QgAQQsQMQgwE6BwgAEIAEEAo6CgguEIAEENQCEAo6CwguEIAEEMcBEK8BOgoIABCABBDJAxAKOgQIABAKOgQILhAKOgYIABAeEBZKBAhBGABKBAhGGABQ1QdYqVVg2XFoBHABeAGAAZ0BiAGnEZIBBDEuMTeYAQCgAQGwAQrIAQLAAQE&sclient=gws-wiz&tbs=lf:1,lf_ui:14&tbm=lcl&rflfq=1&num=10&rldimm=12185191464650835373&lqi=Cg9uYWlsZWRpdCBqYWlwdXJIo-DDuNm3gIAIWh0QABgAGAEiD25haWxlZGl0IGphaXB1cioECAIQAJIBCm5haWxfc2Fsb26aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUXljemhVYzJwblJSQUI&sa=X&rlst=f#rlfi=hd:;si:12185191464650835373,l,Cg9uYWlsZWRpdCBqYWlwdXJIo-DDuNm3gIAIWh0QABgAGAEiD25haWxlZGl0IGphaXB1cioECAIQAJIBCm5haWxfc2Fsb26aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUXljemhVYzJwblJSQUI;mv:[[26.910518099999997,75.7982723],[26.906609099999997,75.7411856]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14">
                <li>E-block</li>
                <li>Amrapali circle</li>
                <li>Vaishali Nagar, Jaipur</li>
              </a>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>
                <a href="http://wa.me/916350041360/">+91-6350041360</a>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Instagram</li>
                <li>
                  <a href="https://www.instagram.com/naileditdot/">
                    @naileditdot
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
