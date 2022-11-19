/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time
 */

const timeConversion = (s) => {
    let formatAM = s.split('AM')
    let formatPM = s.split('PM')

    if(formatAM.length == 2){
        let newformat = formatAM[0].split(':')
        let auxformat = newformat[0] === '12' ? '00' : newformat[0]
        return `${auxformat}:${newformat[1]}:${newformat[2]}`
    }

    if(formatPM.length == 2){
        let newformat = formatPM[0].split(':')

        switch (newformat[0]) {
            case '01':
                return `13:${newformat[1]}:${newformat[2]}`            
            case '02':
                return `14:${newformat[1]}:${newformat[2]}`            
            case '03': 
                return `15:${newformat[1]}:${newformat[2]}`
            case '04':
                return `16:${newformat[1]}:${newformat[2]}`
            case '05':
                return `17:${newformat[1]}:${newformat[2]}`
            case '06':
                return `18:${newformat[1]}:${newformat[2]}`
            case '07':
                return `19:${newformat[1]}:${newformat[2]}`
            case '08':
                return `20:${newformat[1]}:${newformat[2]}`
            case '09':
                return `21:${newformat[1]}:${newformat[2]}`          
            case '10':
                return `22:${newformat[1]}:${newformat[2]}`             
            case '11':
                return `23:${newformat[1]}:${newformat[2]}`              
            case '12':
                return `12:${newformat[1]}:${newformat[2]}`               
            default:
                break;
        }
    }
}

console.log(timeConversion('12:45:54PM'));