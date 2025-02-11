# CRUD operations

# Create
# Read
# Update
# Delete
import psycopg2


def create_person(conn, firstname, lastname, age, course):
    cursor = conn.cursor()
    cursor.execute("INSERT INTO studlist (firstname, lastname, age, course) VALUES (%s, %s, %s, %s)", (firstname, lastname, age, course))
    conn.commit()
    cursor.close()

def read_all_persons(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM studlist")
    stud = cursor.fetchall()
    cursor.close()
    return stud

def read_person(conn, stud_id):
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM studlist where id=%s", str(stud_id))
    stud = cursor.fetchone()
    cursor.close()
    return stud

def update_name(conn, stud_id, name):
    cursor = conn.cursor()
    cursor.execute("UPDATE studlist set firstname=%s WHERE id=%s", (name, str(stud_id)))
    print("name updated!!!!!!! ")
    cursor.close()


def delete_stud(conn, stud_id):
    cursor = conn.cursor()
    cursor.execute("DELETE FROM studlist WHERE id=%s",str(stud_id))
    print("Student info deleted ;(")
    cursor.close()


if __name__ == "__main__":
    conn = psycopg2.connect(
        host="localhost",
        database="postgres",
        user="yrrel",
        password="11lordgrim"
    )
    
    #temp = read_person(conn,2)#check initial name
   # print(temp)
    #update = update_name(conn,2,'maria')
    #temp = read_person(conn,2)#check output
    #print(temp)
    
    
    #delete
    #delete_stud(conn,1)





    #update_name(conn,stud_id,name)


   # create_person(conn, "John", "Doe", 30, "BSIT")
   
   # stud = read_all_persons(conn)
   
   # print( "UID" ,"||", "FirstName" ,"||", "LastName" ,"||", "Course")
   # for persons in stud:
        
    #   print( persons[0] ,"||", persons[1] ,"||", persons[2],"||",persons[3])


  #  print(persons[0][1])