from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html',title = 'home')

@app.route('/about')
def about():
    return render_template('about.html',title = 'about')
@app.route('/message')
def message():
    return render_template('message.html',title = 'message')
@app.route('/story')
def story():
    return render_template('story.html',title = 'story')
    
if __name__ =='__main__':
    app.run(debug=True)
