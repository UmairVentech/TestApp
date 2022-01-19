import React from "react";

const About = () => {
  return (
    <div>
      <div className="p-5 d-flex align-items-center justify-content-center text-center flex-column">
        <h2 className="fs-3 fw-bolder mb-5">
          We handle all of your digital needs
        </h2>
        <p className="w-50 fs-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nam
          rerum vel earum error fugiat cupiditate, dolore eius! Minus,
          explicabo.
        </p>
      </div>

      <div>
        <div className="row">
          <div className="col-sm text-center bgBlue text-white p-5">
            <h3 className="p-2">Contact Us</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
              suscipit. Rerum ducimus a quod, ut et voluptas obcaecati unde
              fuga.
            </p>

            <h5 className="p-2 mailTextSize">contact@acmewebsolutions.test</h5>
          </div>

          <div className="col-sm text-center bgGray text-white p-5">
            <h3 className="p-2">About Our Company</h3>
            <p className="p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio earum porro deserunt, deleniti, quae facere
              repudiandae, officiis est exercitationem nobis iusto doloremque!
              Soluta excepturi in aut suscipit amet temporibus quo?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
