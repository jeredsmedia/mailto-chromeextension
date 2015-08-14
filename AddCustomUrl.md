# Introduction #

Although there are some default email clients listed on the options page, there is a chance that the one you use isn't listed there. In that case, you might want to create your own URL.

# What do I need to know #

Basically, all you need to know is the URL that is used by the email server to compose a new email _from so called query parameters_. Sounds easy, but it often requires some searching, and not all email providers do support this.

# What is the syntax #
The syntax is very easy. You just write down the URL described above, and put the correct parameters in the URL:
| **parameter** | **will be replaced by** |
|:--------------|:------------------------|
| {url}         | The full mailto: url that you click |
| {to}          | The email address(es) that will be in the 'To' field |
| {cc}          | The email address(es) that will be in the 'CC' field |
| {bcc}         | The email address(es) that will be in the 'BCC' field |
| {subject}     | The subject of the email |
| {body}        | The body of the email   |

The URL must at least contain:
  1. A valid URL (http:// or https://)
  1. Either `{to}` or `{url}`

So if your email provider uses the following compose URL
`http://e.mail.com/compose?To=[here should be the 'to' addresses]&CC=[here should be the 'cc' addresses]`, the correct URL would be
`http://e.mail.com/compose?To={to}&CC={cc}`.

# Examples #
Do you have an example URL? Please share it with others by emailing me or commenting below!
| **Email client** | **URL** | **Note** |
|:-----------------|:--------|:---------|
| AOL Mail         | `http://mail.aol.com/33490-311/aim-6/en-us/mail/compose-message.aspx?to={to}&cc={cc}&bcc={bcc}&subject={subject}&body={body}` | (Build in by default) |
| FastMail         | `https://www.fastmail.fm/action/compose/?to={to}&cc={cc}&bcc={bcc}&subject={subject}&body={body}` | (Build in by default) |
| Gmail            | `https://mail.google.com/mail/?view=cm&tf=1&to={to}&cc={cc}&bcc={bcc}&su={subject}&body={body}` | (Build in by default) |
| Godaddy          | `http://email09.secureserver.net/webmail.php?login=1&compose=1&compose_args=sendto{to}` | Must have your email address entered and "enable mailto: links" enabled in the Godaddy Workspace Desktop |
| Hotmail          | `https://mail.live.com/default.aspx?rru=compose&to={to}&subject={subject}&body={body}&cc={cc}` | (Build in by default) |
| Mail.ru          | `http://win.mail.ru/cgi-bin/sentmsg?To={to}&CC={cc}&BCC={bcc}&Subject={subject}&BodyUTF8={body}&accel=1` |          |
| Opera Web mail   | `http://mymail.operamail.com/scripts/mail/Outblaze.mail?compose=1&did=1&a=1&to={to}&subject={subject}&body={body}&cc={cc}` |          |
| My Opera mail    | `https://mail.opera.com/action/compose/?to={to}&cc={cc}&bcc={bcc}&subject={subject}&body={body}` | discontinued |
| Outlook.com      | `https://mail.live.com/default.aspx?rru=compose&to={to}&subject={subject}&body={body}&cc={cc}` | (Build in by default) |
| Outlook Web Access | `https://mail.server.com/owa/?ae=Item&a=New&t=IPM.Note&to={to}&subject={subject}&body={body}` | Replace `mail.server.com` by the domain you use when reading your mail |
| Posteo           | `https://posteo.de/webmail/?_task=mail&_action=compose&_to={url}` |          |
| Windows Live Mail | `https://mail.live.com/default.aspx?rru=compose&to={to}&subject={subject}&body={body}&cc={cc}` | (Build in by default) |
| Yahoo Mail       | `http://compose.mail.yahoo.com/?To={to}&Cc={cc}&Bcc={bcc}&Subj={subject}&Body={body}` **or** `https://server.mail.yahoo.com/neo/launch?action=compose&To={to}&Cc={cc}&Bcc={bcc}&Subj={subject}&Body={body}` | In case of the second URL, replace `server` by the server you use when reading your mail |
| Yandex Mail      | `http://mail.yandex.ru/compose?mailto={url}` |          |
| Zimbra           | `https://mail.server.com/zimbra/mail?view=compose&subject={subject}&to={to}&cc={cc}&bcc={bcc}&body={body}` | Replace `mail.server.com` by the domain you use when reading your mail |
| Zoho Mail        | `https://zmail.zoho.com/mail/compose.do?extsrc=mailto&mode=compose&tp=zb&ct={to}` | (Build in by default) |

Please note: the author of this extension is not affiliated with any of the above companies.