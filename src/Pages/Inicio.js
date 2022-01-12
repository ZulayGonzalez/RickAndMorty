
import React, { useContext } from "react";
import Router from "../Router";

import UseContext from './UseContext'

const Inicio = () => {

	const [list, setList] = useContext(UseContext);
	return (
		<UseContext.Provider value={{
			list,
			setList
		}}>

			<Router />

		</UseContext.Provider>
	)
}
export default Inicio