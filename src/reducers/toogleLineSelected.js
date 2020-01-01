import {LINE_SELECTED} from '../actions';


const initialState = {latestLineId:0,lines:[],lineDetails:[],isLineDrawOn:false};

function toogleLineSelectedReducer(state = initialState,action) {

          switch(action.type){

            case LINE_SELECTED:
               {     
                console.log("Toggle line selected");
                return {...state,
                        isLineDrawOn:true
                        };
                }


            default:
                    return state;
      }

}


export default toogleLineSelectedReducer;