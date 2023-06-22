import { View, Text, FlatList } from "react-native";
import styles from "./style";
import Header from "../../components/Header/Header";
import Balance from "../../components/Balance/Balance";
import Spending from "../../components/Spending/Spending";
import Expenditure from "../../components/Expenditure/Expenditure";
import ExpenditureList from "../../ExpenditureList";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Balance />
      <Spending />

      <View>
        <Text
          style={{
            marginStart: 23,
            color: "#6B6B6B",
            fontSize: 18,
            marginBottom: 20,
          }}
        >
          Expenditure
        </Text>
        <FlatList
          style={styles.list}
          horizontal
          contentContainerStyle={{ gap: 10 }}
          showsHorizontalScrollIndicator={false}
          data={ExpenditureList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Expenditure item={item} />}
        />
      </View>
    </View>
  );
};

export default Home;
