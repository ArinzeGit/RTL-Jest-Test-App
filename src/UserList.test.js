import {render,screen, within} from '@testing-library/react'
import UserList from './UserList'

function renderComponent(){
    const users=[
        {name:'Arinze', email:'arinze@gmail.com'},
        {name:'Ofunne', email:'ofunne@gmail.com'},
        {name:'Ikedi', email:'ikedi@gmail.com'}
    ];
    render(<UserList users={users}/>);
    return {users};
}

test('render one row per user', ()=>{
    const {users}=renderComponent();
    const rows=within( screen.getByTestId('users')).getAllByRole('row');
    expect(rows).toHaveLength(users.length);
})

test('render the email and name of each user',()=>{
    const {users}=renderComponent();
    for (let user of users){
        const name = screen.getByRole('cell',{name:user.name});
        const email = screen.getByRole('cell',{name:user.email});
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }

})