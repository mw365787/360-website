const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))




if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, './client/build', 'index.html'));
      });
}

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Phone: ${req.body.phone}</li>
                <li>Company: ${req.body.company}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
                    port: 587,
                auth: {
                    user: 'eliza.farrell@ethereal.email',
                    pass: 'gUG7d88r2ZSGsw5e2b'
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: 'eliza.farrell@ethereal.email',
            subject: req.body.company,
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
