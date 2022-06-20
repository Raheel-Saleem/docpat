import {Modal, Button} from "react-bootstrap";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
function AreYouADoctor() {
  return (
    <section class="patient-select">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="select-box">
              <div class="d-flex align-items-center">
                <div class="image-holder">
                  <span>
                    <img src="assets/img/icons/doct-01.png" alt="" />
                  </span>
                </div>
                <div>
                  <h2>BECOMEA DOCTOR?</h2>
                  <p>
                    The service allows you to get maximum visibility online and to manage appointments and
                    contacts coming from the site, in a simple and fast way.
                  </p>
                  <Link to="profile" class="book-now">
                    SETUP
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="select-box theme">
              <div class="d-flex align-items-center">
                <div class="image-holder">
                  <span>
                    <img src="assets/img/icons/doct-02.png" alt="" />
                  </span>
                </div>
                <div>
                  <h2>BECOME A PATIENT?</h2>
                  <p>
                    Choosing a specialist has never been so fast! You can filter search results by location
                    and medical specialization, and book medical examination online.
                  </p>
                  <Link to="pat-profile" class="book-now">
                    SETUP
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function ProfileModal() {
  const {user, isSignIn} = useContext(AuthContext);
  const [show, setShow] = useState(isSignIn && !user.isProfileCompleted);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("show: ", show);
  }, [show]);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{background: "#20d7f2"}}>
        <Modal.Title style={{fontSize: "30px", fontWeight: " 700", color: "#fff"}}>SETUP PROFILE</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{background: "azure"}}>
        <AreYouADoctor />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleClose()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
