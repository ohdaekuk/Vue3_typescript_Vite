import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface TestState {
  name: string;
  age: number;
}

const defaultTestState = (): TestState => {
  return {
    name: 'Enzo Oh',
    age: 28,
  };
};

export const useTest = defineStore('test', () => {
  const state: TestState = reactive({
    ...defaultTestState(),
  });

  const piniaTest = () => {
    console.log('piniaTest');
  };

  const testTest = async () => {};

  return { state, piniaTest, testTest };
});
