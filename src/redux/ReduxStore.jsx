import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function ReduxStore() {
  // Getting all Data from Redux Store Coming from Api
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);

  return null;
}
