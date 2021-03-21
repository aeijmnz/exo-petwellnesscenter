import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, SafeAreaView, ImageBackground } from 'react-native';

export default function App() {
  return (

    <ScrollView>
      <SafeAreaView style= {styles.container}>
        <View style={{marginLeft: 8, marginRight:8, marginTop: 8}}>
        <StatusBar 
          // barStyle="dark-content"
          backgroundColor="#1e2f1c"
        />

        <Image
          source={require('./assets/exopetlogo.png')}
          style={styles.mainLogo}
        />

        <Text 
          style={
          {fontSize: 14,color: "#ba9467", textAlign:'center',
          marginTop:5, marginBottom: 5}}>
          CLINIC | GROOMING | SPA AND MASSAGE
        </Text>

        <Text style={styles.title}>Welcome to EXO Pet Wellness Center!</Text>

        <View style={{flexDirection: "row", justifyContent: "center"}}>
        <ImageBackground
          source={require('./assets/exopetlogodoctor.png')}
          style={styles.subLogo}>
          <Text style={{fontSize: 15,color: "white", textAlign:'center', paddingTop:150, borderColor: "#ba9467"}}> 
              EXO PET VET
            </Text>
        </ImageBackground>
        <ImageBackground
          source={require('./assets/exopetlogostaff.png')}
          style={styles.subLogo}>
            <Text style={{fontSize: 15,color: "white", textAlign:'center', paddingTop:145, borderColor: "#ba9467"}}> 
              EXO PET STAFF
            </Text> 
        </ImageBackground>
        </View>
        <ImageBackground
          source={require('./assets/exopetlogopeto.png')}
          style={styles.subLogo}>
            <Text style={{fontSize: 15,color: "white", textAlign:'center', paddingTop:145, borderColor: "#ba9467"}}> 
              EXO PET OWNER
            </Text>
        </ImageBackground>
        
        <Text style={styles.subtitle1}>EXtraOrdinary quality for your EXO Pet.</Text>
          <Text style={styles.subtitle}>Featured EXO Pets</Text>
          <View style={styles.imgGallery}>
            <Image
              source={require('./assets/pet/xiup.jpg')}
              style={styles.imgft}
            />
            <Image
              source={require('./assets/pet/suhop.jpg')}
              style={styles.imgft}
            />
            <Image
              source={require('./assets/pet/layp.jpg')}
              style={styles.imgft}
            /> 
          </View>
          <View style={styles.imgGallery}>
            <Image
              source={require('./assets/pet/chenp.jpg')}
              style={styles.imgft}
            />
            <Image
              source={require('./assets/pet/baekp.jpg')}
              style={styles.imgft}
            />
            <Image
              source={require('./assets/pet/loeyp.jpg')}
              style={styles.imgft}
            /> 
          </View>
          <View style={styles.imgGallery}>
            <Image
              source={require('./assets/pet/cyp.jpg')}
              style={styles.imgft}
            />

            <Image
              source={require('./assets/pet/dop.jpg')}
              style={styles.imgft}/>
            <Image
              source={require('./assets/pet/kaip.jpg')}
              style={styles.imgft}
            /> 
          </View>
          <View style={styles.imgGallery}>
            <Image
            source={require('./assets/pet/sehunp.jpg')}
            style={styles.imgft}
          />
          <Image
            source={require('./assets/pet/scp.jpg')}
            style={styles.imgft}
          />
          <Image
            source={require('./assets/pet/sehunp2.jpg')}
            style={styles.imgft}
          /> 
          </View>
          <Text 
            style={{marginHorizontal: 15, 
            borderTopWidth: 2,
            borderColor:"#ba9467",
            marginTop: 15, }}>
            </Text>

        

        <TextInput 
        style={styles.textInput}   
          defaultValue="Feel free to type here :)"
        />
        <View style={styles.footer}>
        <Text style={{fontSize: 15,color: "#1e2f1c", fontWeight: "bold", textAlign:'center', marginBottom: 8,  borderTopWidth: 2, paddingTop:10, borderColor: "#ba9467"}}> 
        EXO PET WELLNESS CENTER est. 2012
        </Text>
        </View>
        </View>
        </SafeAreaView>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    flexDirection: "column",
    backgroundColor: '#1e2f1c',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  title: {
    fontSize: 22,
    marginTop: 10,     
    color: "white", 
    textAlign:'center',
    borderBottomWidth: 2, 
    borderTopWidth: 2,
    borderColor:"#ba9467",
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 8,
  },

  subtitle: {
    fontSize: 20,
    marginTop: 10,     
    color: "#ba9467", 
    textAlign:'left',
    borderTopWidth: 2,
    borderColor:"#ba9467",
    fontWeight: 'bold',
    marginHorizontal: 10,
    padding: 10,
  },

  subtitle1: {
    fontSize: 15,
    marginTop: 30,     
    color: "white", 
    textAlign:'center',
    borderTopWidth: 2,
    borderColor:"#ba9467",
    // fontWeight: 'bold',
    fontStyle: 'italic',
    marginHorizontal: 10,
    padding: 8,
    fontFamily: 'serif'
  },

  textInput: {
    fontSize: 14,
    color: "gray", 
    textAlign:'center', 
    marginBottom: 25,
    marginHorizontal: 20,
    // marginTop: 30, 
    borderWidth: 1.2, 
    borderColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5   
  }, 
  
  mainLogo: {
    width: 200, height: 200, marginTop:50, alignSelf: 'center'
  },

  subLogo: {
    width: 150, 
    height: 150,
    margin: 10,
    // marginLeft: 30,
    // marginTop: 10,
    marginBottom: 18, 
    alignSelf: 'center'
  },
  
  imgGallery:{
    margin: 15,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  imgft: {
    width: 100, 
    height: 100,
    justifyContent: "center",
  },

  footer: {
    height: 40,
    backgroundColor: "#ba9467",
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }

});

//@aeijmnz | Jazmine Tumibay