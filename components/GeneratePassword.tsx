import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number().min(6, 'Password should be min of 6 characters').max(10, 'Password should be max of 10 characters').required('Length is required')
})

const GeneratePassword = () => {
    const [password, setPassword] = useState('');
    const [isPassGenerated, setIsPassGenerated] = useState(false);
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const generatePasswordString = (passwordLength: number) => {
        let characterList = '';
        const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
        const digits = "0123456789";
        const specialCharaters = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";
        
        if (upperCase) characterList += uppercaseLetters;
        if (lowerCase) characterList += lowercaseLetters;
        if (numbers) characterList += digits;
        if (symbols) characterList += specialCharaters;

        const passwordResult = createPassword(characterList, passwordLength);
        setPassword(passwordResult);
        setIsPassGenerated(true);
    }
    const createPassword = (characters: string, passwordLength: number) => {
        let result = '';
        for (let i = 0; i < passwordLength; i++){
            const charIndex = Math.round(Math.random() * characters.length);
            result += characters.charAt(charIndex);
        }
        return result;
    }
    const resetPasswordState = () => {
        setPassword('');
        setIsPassGenerated(false);
        setLowerCase(true);
        setUpperCase(false);
        setNumbers(false);
        setSymbols(false);
    }
  return (
      <ScrollView keyboardShouldPersistTaps="handled">
          <SafeAreaView style={styles.appContainer}>
              <View style={styles.formContainer}>
                  <Formik initialValues={{ passwordLength: '' }}
                      validationSchema={PasswordSchema}
                      onSubmit={values => {
                          generatePasswordString(Number(values.passwordLength))
                      }}
                  >
                      {({
                          values,
                          errors,
                          touched,
                          isValid,
                          handleChange,
                          handleSubmit,
                          handleReset,
                      }) => (
                          <>
                              <View style={styles.inputWrapper}>
                                  <View style={styles.inputColumn}>
                                      <Text style={styles.textBlack}>Password Length: </Text>
                                      {
                                          touched.passwordLength && errors.passwordLength && (
                                              <Text style={styles.errorText}>
                                                  {errors.passwordLength}
                                              </Text>
                                          )
                                      }
                                      
                                  </View>
                                  <TextInput
                                      style={styles.inputStyle}
                                      value={values.passwordLength}
                                      onChangeText={handleChange('passwordLength')}
                                      placeholder='Ex: 8'
                                      keyboardType='numeric'
                                  />
                              </View>   
                              <View style={styles.inputWrapper}>
                                  <Text style={styles.textBlack}>Include LowerCase: </Text>
                                  <BouncyCheckbox
                                      isChecked={lowerCase}
                                      onPress={() => setLowerCase(!lowerCase)}
                                      fillColor='green'
                                  />
                              </View>   
                              <View style={styles.inputWrapper}>
                                  <Text style={styles.textBlack}>Include UpperCase: </Text>
                                  <BouncyCheckbox
                                      isChecked={upperCase}
                                      onPress={() => setUpperCase(!upperCase)}
                                      fillColor='#C9A0DC'
                                  />
                              </View>   
                              <View style={styles.inputWrapper}>
                                  <Text style={styles.textBlack}>Include Number: </Text>
                                  <BouncyCheckbox
                                      isChecked={numbers}
                                      onPress={() => setNumbers(!numbers)}
                                      fillColor='red'
                                  />
                              </View>   
                              <View style={styles.inputWrapper}>
                                  <Text style={styles.textBlack}>Include Symbols: </Text>
                                  <BouncyCheckbox
                                      isChecked={symbols}
                                      onPress={() => setSymbols(!symbols)}
                                      fillColor='#FC80A5'
                                  />
                              </View> 
                              
                              <View style={styles.formActions}>
                                  <TouchableOpacity
                                      onPress={() => {
                                          handleSubmit();
                                      }}
                                      disabled={!isValid}
                                      style={styles.primaryBtn}
                                      
                                  ><Text style={styles.primaryBtnColor}>Generate Password</Text></TouchableOpacity>
                                  <TouchableOpacity
                                      onPress={() => {
                                          handleReset();
                                          resetPasswordState();
                                  }}
                                      style={styles.resetBtn}><Text style={styles.primaryBtnColor}>Reset</Text></TouchableOpacity>
                              </View>   
                          </>
                      )}
                      
                  </Formik>
              </View>
              {
                  isPassGenerated && (
                      <View style={styles.resultCard}>
                          <Text style={styles.resultCardText}>
                              The Password is: 
                          </Text>
                          <Text>
                              Long Press to Copy
                          </Text>
                          <Text selectable={true} style={styles.resultFinal}>
                              {password}
                          </Text>
                      </View>
                  )
              }
          </SafeAreaView>
    </ScrollView>
  )
}

export default GeneratePassword

const styles = StyleSheet.create({
    formContainer: {
        
    },
    appContainer: {
        
    },
    inputWrapper: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    formActions: {
        
        
    },
    inputColumn: {
        
    },
    inputStyle: {
        color: 'white',
        width: 100,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal:10
    },
    textBlack: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:15,
    },
    errorText: {
        color: 'red',
        fontSize: 15,
        // marginTop:25
    },
    primaryBtn: {
        backgroundColor: 'green',
        borderRadius: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        paddingVertical: 20,
    },
    resetBtn: {
        backgroundColor: 'red',
        borderRadius: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
    },
    primaryBtnColor: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:18
    },
    resultCard: {
        backgroundColor: 'white',
        borderRadius: 4,
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        margin: 10,
    },
    resultCardText: {
        fontSize: 18,
        fontWeight:'bold'
    },
    resultFinal: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 20,
        textAlign: 'center',
        color:'green'
    }
})