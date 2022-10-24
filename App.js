import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

async function enviaMensaje(mde, status) {
	return fetch(`http://localhost:5000/data/alerta`, {
	  method: 'PUT',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({
      "mdeid":mde,
      "estado":status
		})
	})
	  .then(data => data.json());
	  //.then(data => console.log(data));
   }

const handleSubmit = async (e) => {
  const res = await enviaMensaje('mde01','false');
  console.log(res);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={handleSubmit}
      />
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
