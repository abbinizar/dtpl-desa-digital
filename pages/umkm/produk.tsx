import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import ProductUmkm from "../../components/templates/umkm/product";

const UmkmProdukPage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <ProductUmkm />
    </UserHeader>
  );
};

export default UmkmProdukPage;
