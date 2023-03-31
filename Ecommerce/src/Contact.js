import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    background-size: cover;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
  
    .container {
      background: white;
  padding: 40px 40px;
  border-radius: 30px;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            display: block;
            margin: 0 auto;
            line-height: 28pt;
            padding: 0 10px;
            background: #282A35;
            letter-spacing: 2px;
            transition: 0.2s all ease-in-out;
            outline: none;
            border: 1px solid black;
            border-radius: 50px;
            box-shadow: 3px 3px 1px 1px black, 3px 3px 1px 2px black;
            &:hover {
              background: black;
                color: white;
                border: 1px solid black;
            }
            &:active{
              transform: translateY(4px);
                box-shadow: 0 5px #666;
            }
          }
        }
      }
    }
    input:focus {
  border: 5px solid #282A35;
}

textarea:focus {
  border: 5px solid #282A35;
}
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
        width="60%"
        height="400"
        style={{ border: 0, borderRadius:20 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
<br></br><br></br>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mbjeryzn"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;