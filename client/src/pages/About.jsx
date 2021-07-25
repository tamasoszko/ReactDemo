import { Text } from 'components/Text'
import { sampleText } from 'assets/Samples';
import { Button } from 'components/Button';
import auth from 'auth/Authentication';

export function About() {

    const onClick = () => {
        auth.logout()
    }
    const user = auth.getUser()
    const title = user ? `${user.username}(${formattedRoles(user.roles)})` : 'Not logged in'
    return (
        <div class='flex flex-col mx-4 mb-4 gap-4'>
            <Text theme='h1' title={title} />
            <Text theme='title' title='v0.0.1' />
            <Text theme='subtitle' title={sampleText.short} />
            <Button theme='' title='Logout' onClick={onClick} />
        </div>
    );
}

function formattedRoles(roles) {
    return roles.map( item => {
        return item.replaceAll('ROLE_', '').toLowerCase()
    }).join(', ')
}