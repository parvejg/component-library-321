import { Layout } from "./Layout";
import {
  CircleList,
  LowerAlphaList,
  OrderedList,
  SquareList,
  UnOrderedList,
  UpperRomanList,
  NoneBulletList,
} from "./List";
export const ListPage = () => {
  return (
    <Layout>
      <h2>List</h2>
      <OrderedList />
      <div></div>
      <UnOrderedList />
      <div></div>
      <CircleList />
      <div></div>
      <SquareList />
      <div></div>
      <UpperRomanList />
      <div></div>
      <LowerAlphaList />
      <div></div>
      <NoneBulletList />
      <div></div>
    </Layout>
  );
};
