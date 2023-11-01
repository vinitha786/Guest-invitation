

function App() {
  return(
   <>
   <div align="center">
    <h1>FACULTY GUEST INVITATION</h1>
    <tr>
      <td><label>Name of the faculty</label></td>
      <td><input type="text" placeholder="Enter Your Name"></input></td>
    </tr>
    <td><label>Date</label></td>
    <td><input type="date" name="date"></input></td>
    <tr>
    <td><label>Topic of the Guest Talk</label></td>
    <td><input type="text" placeholder="Enter Topic"></input></td>
    </tr>
    <tr>
      <td><label>Name of the Insistution/Industry</label></td>
      <td><input type="text" placeholder="Enter the Name"></input></td>
    </tr>
    <tr>
      <td><label>Place of the Insistution/Industry</label></td>
      <td><input type="text" placeholder="Enter the Place"></input></td>
    </tr>
    <tr>
      <td><label>No. of Benficiaries</label></td>
      <td><input type="text" placeholder="Enter the number"></input></td>
    </tr>
    <tr>
      <td><label>Letter of Appreciation/ Certificate-PDF</label></td>
      <td><input type="file"></input></td>
    </tr>
   </div>
   </>
  );

}

    
  
   
  
export default App;

