import { Text,TextInput, TouchableOpacity, View } from "react-native";
import Social from "../reusable/social";

const Signup = ({navigation})=>{
     const fields = [
          {
               lable: "Fullname",
               name: "fullname"
          },
          {
               lable: "email",
               name: "email"
          },
          {
               lable: "password",
               name: "password"
          },
          {
               lable: "Repeat Password",
               name: "repeat-password"
          }
     ]
     return (
          <View style={{flex:1,justifyContent: "space-between",padding:12}}>
               <View >
                    {
                         fields.map((fieldItem,fieldsIndex)=>(
                              <View key={fieldsIndex} style={{marginBottom: 8}}>
                                   <Text style={{fontSize: 18}}>{fieldItem.lable}</Text>
                                   <TextInput 
                                        name={fieldItem.name}
                                        style={{
                                             borderWidth: 1,
                                             borderColor: "#ccc",
                                             borderStyle: "solid",
                                             paddingHorizontal: 8,
                                             paddingVertical: 6,
                                             marginTop: 6
                                        }}
                                   />
                              </View>
                         ))
                    }
                    <TouchableOpacity style={{backgroundColor: "#752FFF",paddingVertical: 12,marginVertical:12}}>
                         <Text style={{textAlign: "center",color: "white",fontSize:18}}>Signup</Text>
                    </TouchableOpacity>
                    <Text style={{textAlign: 'center', marginBottom: 4}}>By signing up you agree to our privacy</Text>
                    <Text style={{textAlign: 'center', color: '#752FFF'}}>Policy and Terms</Text>
               </View>
               <Social />
               <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <Text style={{textAlign: 'center',marginRight:12}}>
                         Already have an account? 
                    </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("login")}>
                         <Text style={{color: '#752FFF'}}>Sign in</Text>
                    </TouchableOpacity>
               </View>
          </View>
     )
}

export default Signup;