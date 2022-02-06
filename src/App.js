// import { useState, useEffect } from "react";
// import Container from "./components/Container/Container";
// import SearchBar from "./components/Searchbar/Searchbar";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import ImgApiService from "./services/api";
// import { Message } from "./components/ImageGallery/ImageGallery.styled";
// import {
//   ButtonWrapper,
//   LoadMoreButton,
// } from "./components/Button/Button.styled";
// import Spinner from "./components/Spinner/Spinner";
// import Modal from "./components/Modal/Modal";
// import { ModalCloseButton } from "./components/Modal/Modal.styled";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function App() {
//   const [request, setRequest] = useState("");
//   const [largeImgSrc, setLargeImgSrc] = useState("");
//   const [showModal, setShowModal] = useState("");
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState("idle");
//   const [page, setPage] = useState(1);

//   const handleFormSubmit = (request) => {
//     setRequest(request);
//     setImages([]);
//     setPage(1);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };
//   useEffect(() => {
//     if (!request) {
//       return;
//     }
//     if (page === 1) {
//       setImages([]);
//       setStatus("idle");
//     }
//     setStatus("pending");
//     const imgApiService = new ImgApiService();
//     imgApiService.query = request;
//     imgApiService.page = page;
//     imgApiService
//       .fetchImg()
//       .then((data) => {
//         if (data.hits.length === 0) {
//           toast.error("Nothing found on your query!", {
//             theme: "colored",
//           });
//         }
//         setImages((images) => [...images, ...data.hits]);
//         setStatus("resolved");
//         if (page !== 1) {
//           window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: "smooth",
//           });
//         }
//       })
//       .catch((error) => {
//         setError(error);
//         setStatus("rejected");
//       });
//   }, [request, page]);

//   const onLoadClick = () => {
//     setPage((state) => state + 1);
//   };

//   const onImgClick = (largeImageURL) => {
//     toggleModal();
//     setLargeImgSrc(largeImageURL);
//   };

//   return (
//     <Container>
//       <SearchBar onSubmit={handleFormSubmit} />
//       {status === "idle" && <Message>Please enter your query</Message>}
//       {status === "pending" && <Spinner />}
//       {status === "rejected" && <div> {error.message} </div>}
//       {status === "resolved" && (
//         <ImageGallery images={images} onClick={onImgClick} />
//       )}
//       {status === "resolved" && images.length > 0 && images.length % 12 === 0 && (
//         <ButtonWrapper>
//           <LoadMoreButton type="button" onClick={onLoadClick}>
//             Load more
//           </LoadMoreButton>
//         </ButtonWrapper>
//       )}
//       {showModal && (
//         <Modal onClose={toggleModal}>
//           <img src={largeImgSrc} alt="" width="100%" height="100%" />
//           <ModalCloseButton onClick={toggleModal}>Close Modal</ModalCloseButton>
//         </Modal>
//       )}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </Container>
//   );
// }
