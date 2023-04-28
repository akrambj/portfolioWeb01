import React from 'react'
import Article from '../components/Article';

const Section15 = () => {
  return (
    <section className="py-10">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Got Questions? Look Here</h2>
        <p className="py-4 text-[13px] md:w-[40%] md:text-[14px] md:mx-auto font-semibold">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          a libero tempus, blandit and cursus varius and magnis sapien
        </p>
      </div>
      <div className="container w-[90%] mx-auto min-h-[100px] py-6 md:grid md:grid-cols-2 md:items-center  md:w-[80%]">
        <Article
          question="Can I see OLMO in action before purchasing?"
          answer="Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae"
        />
        <Article
          question="Can I see OLMO in action before purchasing?"
          answer="An enim nullam tempor sapien gravida a donec ipsum enim an porta justo integer at velna vitae auctor integer congue undo magna at pretium purus pretium"
        />
        <Article
          question="Can I see OLMO in action before purchasing?"
          answer="Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium purus pretium rutrum tempor sapien"
        />
        <Article
          question="Can I see OLMO in action before purchasing?"
          answer="Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and quisque gravida donec and neque. Blandit justo aliquam molestie nunc sapien"
        />
        <Article
          question="Can I see OLMO in action before purchasing?"
          answer="Etiam amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula"
        />
        <Article
          question="Can I see OLMO in action before purchasing?"
          answer="Quaerat sodales sapien euismod blandit purus and ipsum primis in cubilia laoreet augue luctus"
        />
      </div>
    </section>
  );
}

export default Section15