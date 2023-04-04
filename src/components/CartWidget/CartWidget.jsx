import styled from "@emotion/styled";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./CartWidget.module.css"

const StyledBadge = styled(Badge)(({ thme }) => ({
  "& .MuiBadge-badge": {
    right: +4,
    top: -1,
  },
}));
const CartWidget = () => {
  return (
    <div className={styles.cartContainer}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={100} max={99} color="error">
          <ShoppingCartIcon className={styles.cart}/>
        </StyledBadge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
