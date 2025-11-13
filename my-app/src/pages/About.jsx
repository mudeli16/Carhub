import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About CarHub</h1>
      <p>
        CarHub is your one-stop app for exploring, comparing, and discovering
        cars from different brands. Whether you're looking for a luxury ride
        or an eco-friendly option, CarHub helps you make the best choice.
      </p>

      <p>
        This project was built using React to help you learn front-end
        development and component-based design. 🚀
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
};

export default About;
