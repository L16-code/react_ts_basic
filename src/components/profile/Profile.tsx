import { useSelector } from "react-redux";
import { RootState } from "../../state_management/reducers";

const Profile = () => {
  const { authData } = useSelector((state: RootState) => state.authReducers);
    console.log(authData?.address)
    const profiledata=authData
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '500px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: "pink" }}>
                
                <div style={{ marginBottom: '15px', display: "flex" }}>
                    <h3>FirstName:-</h3>
                    <h4 >{profiledata?.firstname}</h4>
                </div>
                <div style={{ marginBottom: '15px', display: "flex" }}>
                    <h3>LastName:-</h3>
                    <h4 >{profiledata?.lastname}</h4>
                </div>
                <div style={{ marginBottom: '15px', display: "flex" }}>
                    <h3>phone:-</h3>
                    <h4 >{profiledata?.phone}</h4>
                </div>
                <div style={{ marginBottom: '15px', display: "flex" }}>
                    <h3>address:-</h3>
                    <h4 >{profiledata?.address}</h4>
                </div>
                <div style={{ marginBottom: '15px', display: "flex" }}>
                    <h3>Email:-</h3>
                    <h4 >{profiledata?.email}</h4>
                </div>
            </div>
        </div>
    )
}

export default Profile