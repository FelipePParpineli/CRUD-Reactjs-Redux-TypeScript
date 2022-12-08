import Api from '../store/axiosAPI';
import {UserModel} from '../models/redux-usuario-models';

export default{
    async getSingleUser(user_name:string){
        var response=await Api().get('usuários');
        return response.data.filter((user:UserModel) => user_name===user_name)[""];
    }
}