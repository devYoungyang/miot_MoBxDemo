

'use strict'
import { observable } from "mobx";

const HomeStore = observable({
    clickedCounts: 1,
});

HomeStore.plus = () => {
    HomeStore.clickedCounts += 1;
}

HomeStore.minus = () => {
    HomeStore.clickedCounts--;
}
export default HomeStore;