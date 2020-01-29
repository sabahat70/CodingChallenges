WIDTH = 1280
HEIGHT = 720

main_box = Rect(0,0,820,240)
main_box.move_ip(50,40)
timer_box = Rect(0,0,240,240)
timer_box.move_ip(990, 40)

answer_box1 = Rect(0,0,495,165)
answer_box2 = Rect(0,0,495,165)
answer_box3 = Rect(0,0,495,165)
answer_box4 = Rect(0,0,495,165)

answer_box1.move_ip(50,358)
answer_box2.move_ip(735,358)
answer_box3.move_ip(50,538)
answer_box4.move_ip(735,538)

q1 =["What's my favorite color?","blue","orange","yellow","red", 1]
q2 = ["What is the capital of France?", "London","Paris","Berlin","Tokyo", 2]
q3 = ["What is 5+7 ?","12","10","14","13", 1]
q4 = ["Which planet is closest to the sun?","Saturn","Mars","Mercury","Venus",3]

questions= [q1,q2,q3,q4]

question = questions.pop(0)

timer = 0

def draw():
	screen.fill("dim gray")
	screen.draw.filled_rect(main_box,"sky blue")
	screen.draw.filled_rect(timer_box,"sky blue")
	screen.draw.filled_rect(answer_box1,"gray")
	screen.draw.filled_rect(answer_box2,"gray")
	screen.draw.filled_rect(answer_box3,"gray")
	screen.draw.filled_rect(answer_box4,"gray")

	screen.draw.textbox(question[0],main_box,color="black")
	screen.draw.textbox(str(timer),timer_box,color="black")


