// import React from 'react';
// import {render} from "@testing-library/react"
// import { ArtistsContext, ArtistsContextProvider } from './context/ArtistsContext';

// describe("ArtistsContextProvider", () => {

//   it("the user is logged in by default", () => {
//     const {getByText} = render (<ArtistsContextProvider>     
//       <ArtistsContext.Consumer>
//         {
//           // construyendo algo en el layout
//           (value) => <span>Logout</span>
//           // value => <span>Logout</span>
//         }
//       </ArtistsContext.Consumer>
//     </ArtistsContextProvider> )

//     // expect(getByText("Is logged in: true")).toBeTruthy()
//     expect(getByText("Logout")).toBeTruthy()
//   }) 
// })

// describe(".logout", () => {

//   it("sets token to false", () => {
//     const {getByText} = render (<ArtistsContextProvider>     
//       <ArtistsContext.Consumer>
//       {(value) => (
//               <>
//                 <span>Login to Spotify: {value.token.toString()}</span>
//                 <button onClick={value.login}>Login to Spotify</button>
//                 <button onClick={value.logout}>Logout</button>
//               </>
//       )}
//       </ArtistsContext.Consumer>
//     </ArtistsContextProvider> )

//       fireEvent.click(getByText("Login to Spotify"))
//       fireEvent.click(getByText("Logout"))

//       expect(getByText("Is logged in: false")).toBeTruthy()
//   }) 
// })